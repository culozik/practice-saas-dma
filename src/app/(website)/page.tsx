import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";

export default function Home() {
	return (
		<main>
			<section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
				<div className="relative">
					<div className="container px-4 py-8">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center font-bold text-black">
									IS
								</div>
								<span className="text-xl font-semibold text-white">
									InstaSlide
								</span>
							</div>
							<nav className="hidden space-x-6 text-sm text-blue-200 md:block">
								<Link href="#features">Features</Link>
								<Link href="#pricing">Pricing</Link>
								<Link href="#about">About</Link>
							</nav>
							<Button className="">
								<Link href="/dashboard">Login</Link>
							</Button>
						</div>

						<div className="mx-auto mt-16 max-w-3xl text-center">
							<h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
								Transform Your Instagram Engagement with InstaSlide
							</h1>

							<p className="mt-6 text-lg text-blue-200">
								InstaSlide revolutionizes how you connect with your audience on
								Instagram. Automate responses and boost engagement effortlessly,
								turning interactions into valuable business opportunities.
							</p>

							<div className="mt-8 flex justify-center gap-4">
								<Button size="lg" className="">
									Get Started
								</Button>
								<Button size="lg" variant="outline" className="">
									Learn More
								</Button>
							</div>
						</div>
						<div className="relative h-40 md:h-80 w-full  mt-10">
							<Image
								src="/Ig-creators-min.png"
								alt="Community member"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="container w-full py-12 md:py-24 lg:py-32 bg-background">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Choose Your Plan
						</h2>
						<p className="max-w-[900px] text-muted-foreground">
							Select the perfect plan to boost your Instagram engagement
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
						{PLANS.map((plan, index) => (
							<Card key={index} className="flex flex-col justify-between">
								<CardHeader>
									<CardTitle>{plan.name}</CardTitle>
									<CardDescription>{plan.description}</CardDescription>
								</CardHeader>
								<CardContent className="grid gap-4">
									<div className="text-4xl font-bold">
										{plan.price}
										<span className="text-lg font-normal text-muted-foreground">
											/month
										</span>
									</div>
									<ul className="space-y-2">
										{plan.features.map((feature, i) => (
											<li key={i} className="flex items-center">
												<CheckCircle className="mr-2 h-4 w-4 text-primary" />
												<span className="text-sm text-muted-foreground">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full">{plan.cta}</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
