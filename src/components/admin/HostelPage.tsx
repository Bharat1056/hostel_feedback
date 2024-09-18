"use client"
import { StarIcon } from "lucide-react"
import axios from "axios"
import { useEffect, useState } from "react"
import { baseURL } from "@/constants";

interface HostelReview {
    _id: string;
    name: string;
    avgHygiene: number;
    avgFoodQuality: number;
    avgFoodQuantity: number;
    avgFoodTiming: number;
    avgMenuAdherence: number;
    avgStaffHygiene: number;
    avgTableCleanliness: number;
    avgStaffBehavior: number;
    avgPlateCleanliness: number;
    avgWaitingTime: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalReviews: number;
}

function RatingBar({ rating }: { rating: number }) {
    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                <StarIcon
                    key={star}
                    className={`h-4 w-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill={star <= rating ? "currentColor" : "none"}
                />
            ))}
            <span className="ml-2 text-sm font-medium text-black">{rating.toFixed(1)}</span>
        </div>
    )
}

export default function HostelLanding() {
    const [hostelData, setHostelData] = useState<HostelReview[]>([])

    const fetchHostelData = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/feedback/get`)
            setHostelData(response.data.data)
        } catch (error) {
            console.error("Error fetching hostel data:", error)
        }
    }

    useEffect(() => {
        fetchHostelData()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Top Rated Hostels</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hostelData.map((hostel, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:border-gray-300"
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{hostel.name}</h2>
                            <p className="text-sm text-gray-600 mb-6">
                                <span className="font-medium">Total Reviews:</span> {hostel.totalReviews}
                            </p>
                            <div className="space-y-4 mt-auto">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Hygiene:</span>
                                    <RatingBar rating={hostel.avgHygiene} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Food Quality:</span>
                                    <RatingBar rating={hostel.avgFoodQuality} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Food Quantity:</span>
                                    <RatingBar rating={hostel.avgFoodQuantity} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Food Timing:</span>
                                    <RatingBar rating={hostel.avgFoodTiming} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Menu Adherence:</span>
                                    <RatingBar rating={hostel.avgMenuAdherence} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Staff Hygiene:</span>
                                    <RatingBar rating={hostel.avgStaffHygiene} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Staff Behavior:</span>
                                    <RatingBar rating={hostel.avgStaffBehavior} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Table Cleanliness:</span>
                                    <RatingBar rating={hostel.avgTableCleanliness} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Plate Cleanliness:</span>
                                    <RatingBar rating={hostel.avgPlateCleanliness} />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Waiting Time:</span>
                                    <RatingBar rating={hostel.avgWaitingTime} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
