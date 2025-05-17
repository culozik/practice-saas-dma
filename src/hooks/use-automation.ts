import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { z } from "zod";

import {
	createAutomations,
	deleteKeyword,
	saveKeyword,
	saveListener,
	savePosts,
	saveTrigger,
	updateAutomationName,
} from "@/actions/automations";
import { useMutationData } from "./use-mutation-data";
import useZodForm from "./use-zod-form";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { TRIGGER } from "@/redux/slices/automation";

export const useCreateAutomation = (id?: string) => {
	const { isPending, mutate } = useMutationData(
		["create-automation"],
		() => createAutomations(id),
		"user-automations"
	);

	return {
		isPending,
		mutate,
	};
};

export const useEditAutomation = (automationId: string) => {
	const [edit, setEdit] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const enableEdit = () => setEdit(true);
	const disabledEdit = () => setEdit(false);

	const { isPending, mutate } = useMutationData(
		["update-automation"],
		(data: { name: string }) =>
			updateAutomationName(automationId, { name: data.name }),
		"automation-info",
		disabledEdit
	);

	useEffect(() => {
		function handleClickOutside(this: Document, event: MouseEvent) {
			if (
				inputRef.current &&
				!inputRef.current.contains(event.target as Node | null)
			) {
				if (inputRef.current.value !== "") {
					mutate({ name: inputRef.current.value });
				} else {
					disabledEdit();
				}
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [mutate]);

	return {
		edit,
		enableEdit,
		disabledEdit,
		inputRef,
		isPending,
	};
};

export const useCreateListener = (id: string) => {
	const [listener, setListener] = useState<"MESSAGE" | "SMARTAI" | null>(null);

	const promptSchema = z.object({
		prompt: z.string().min(1),
		reply: z.string(),
	});

	const { isPending, mutate } = useMutationData(
		["create-listener"],
		(data: { prompt: string; reply: string }) =>
			saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
		"automation-info"
	);

	const { register, errors, onFormSubmit, watch, reset } = useZodForm(
		promptSchema,
		mutate
	);

	const onSetListener = (type: "SMARTAI" | "MESSAGE") => setListener(type);

	return {
		listener,
		isPending,
		errors,
		onSetListener,
		register,
		onFormSubmit,
		watch,
		reset,
	};
};

export const useTriggers = (id: string) => {
	const types = useAppSelector(
		(state) => state.AutomationReducer.trigger?.types
	);

	const dispatch: AppDispatch = useDispatch();

	const onSetTrigger = (type: "COMMENT" | "DM") =>
		dispatch(TRIGGER({ trigger: { type } }));

	const { isPending, mutate } = useMutationData(
		["add-trigger"],
		(data: { types: string[] }) => saveTrigger(id, data.types),
		"automation-info"
	);

	const onSaveTrigger = () => mutate({ types });

	return {
		types,
		isPending,
		onSetTrigger,
		onSaveTrigger,
	};
};

export const useKeywords = (id: string) => {
	const [keyword, setKeyword] = useState("");
	const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setKeyword(e.target.value);

	const { mutate } = useMutationData(
		["add-keyword"],
		(data: { keyword: string }) => saveKeyword(id, data.keyword),
		"automation-info",
		() => setKeyword("")
	);

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			mutate({ keyword });
			setKeyword("");
		}
	};

	const { mutate: deleteMutation } = useMutationData(
		["delete-keyword"],
		(data: { id: string }) => deleteKeyword(data.id),
		"automation-info"
	);
	return {
		keyword,
		onValueChange,
		onKeyPress,
		deleteMutation,
	};
};

export const useAutomationPosts = (id: string) => {
	const [post, setPost] = useState<
		{
			postId: string;
			caption?: string;
			media: string;
			mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
		}[]
	>([]);

	const onSelectPost = (post: {
		postId: string;
		caption?: string;
		media: string;
		mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
	}) => {
		setPost((prev) => {
			if (prev.find((p) => p.postId === post.postId)) {
				return prev.filter((item) => item.postId !== post.postId);
			} else {
				return [...prev, post];
			}
		});
	};

	const { mutate, isPending } = useMutationData(
		["attach-posts"],
		() => savePosts(id, post),
		"automation-info",
		() => setPost([])
	);

	return {
		post,
		onSelectPost,
		mutate,
		isPending,
	};
};
