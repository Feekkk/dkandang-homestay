
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import c1 from "@/assets/c1.JPG";
import c2 from "@/assets/c2.JPG";
import c3 from "@/assets/c3.JPG";
import c4 from "@/assets/c4.JPG";

const rooms = [
	{
		title: "Master Bedroom",
		subtitle: "King-size comfort",
		capacity: "2 guests",
		image: c1,
	},
	{
		title: "Cozy Twin Room",
		subtitle: "Perfect for friends",
		capacity: "2 guests",
		image: c2,
	},
	{
		title: "Living Area",
		subtitle: "Relax & unwind",
		capacity: "6 guests",
		image: c3,
	},
	{
		title: "Modern Kitchen",
		subtitle: "Cook like a local",
		capacity: "6 guests",
		image: c4,
	},
];

export const RoomsSpaces = () => {
	const navigate = useNavigate();

	const handleViewMore = () => {
		navigate("/rooms");
	};

	return (
		<section className="py-24 bg-gradient-sunset">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
						Thoughtfully Designed
						<span className="block text-homestay-warm">Spaces & Rooms</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Each space tells a story, designed with your comfort and experience in mind.
						From restful bedrooms to gathering spaces that bring people together.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{rooms.map((room, index) => (
						<Card
							key={index}
							className="overflow-hidden border-0 shadow-hover hover:shadow-warm transition-all duration-500 group"
						>
							<div className="h-48 relative">
								<img
									src={room.image}
									alt={room.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
								<div className="absolute top-4 right-4">
									<Badge
										variant="secondary"
										className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
									>
										{room.capacity}
									</Badge>
								</div>
							</div>

							<CardContent className="p-6">
								<div className="mb-4">
									<h3 className="text-xl font-bold text-foreground mb-1">
										{room.title}
									</h3>
									<p className="text-muted-foreground">
										{room.subtitle}
									</p>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="flex items-center text-sm text-muted-foreground">
										<Users className="w-4 h-4 mr-2" />
										{room.capacity}
									</div>
								</div>

								<div className="mb-6">
									{/* Features removed, left blank intentionally */}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* View More Button */}
				<div className="text-center mt-12">
					<Button
						variant="warm"
						size="lg"
						onClick={handleViewMore}
						className="min-w-48"
					>
						View More Details
						<ArrowRight className="w-5 h-5 ml-2" />
					</Button>
				</div>
			</div>
		</section>
	);

};