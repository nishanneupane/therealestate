"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const Hero = () => {
    const [activeTab, setActiveTab] = useState("buy")

    const handleTabChange = (value: string) => {
        setActiveTab(value)
    }

    return (
        <div className="relative w-full h-[600px] overflow-hidden mt-10">
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{
                    backgroundImage:
                        "url(/bg.jpg)",
                    filter: "brightness(0.85)",
                }}
            />

            <div className="relative z-0 flex flex-col items-center justify-center h-full px-4 md:px-6 max-w-7xl mx-auto pt-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 max-w-4xl">
                    The #1 real estate platform
                    <br />
                    in Nepal<span className="text-sm align-super">*</span>
                </h1>


                <div className="w-full max-w-4xl">

                    <Tabs defaultValue="buy" value={activeTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="w-full bg-white/20 backdrop-blur-sm rounded-t-lg h-14 p-1 grid grid-cols-6">
                            <TabsTrigger
                                value="buy"
                                className={cn(
                                    "text-lg font-medium rounded-md transition-all",
                                    activeTab === "buy" ? "bg-white text-slate-900" : "text-white hover:bg-white/10",
                                )}
                            >
                                Buy
                            </TabsTrigger>
                            <TabsTrigger
                                value="rent"
                                className={cn(
                                    "text-lg font-medium rounded-md transition-all",
                                    activeTab === "rent" ? "bg-white text-slate-900" : "text-white hover:bg-white/10",
                                )}
                            >
                                Rent
                            </TabsTrigger>
                            <TabsTrigger
                                value="sell"
                                className={cn(
                                    "text-lg font-medium rounded-md transition-all",
                                    activeTab === "sell" ? "bg-white text-slate-900" : "text-white hover:bg-white/10",
                                )}
                            >
                                Sell
                            </TabsTrigger>
                            <TabsTrigger
                                value="pre-approval"
                                className={cn(
                                    "text-lg font-medium rounded-md transition-all",
                                    activeTab === "pre-approval" ? "bg-white text-slate-900" : "text-white hover:bg-white/10",
                                )}
                            >
                                Pre-approval
                            </TabsTrigger>
                            <TabsTrigger
                                value="just-sold"
                                className={cn(
                                    "text-lg font-medium rounded-md transition-all",
                                    activeTab === "just-sold" ? "bg-white text-slate-900" : "text-white hover:bg-white/10",
                                )}
                            >
                                Just sold
                            </TabsTrigger>
                            <TabsTrigger
                                value="home-value"
                                className={cn(
                                    "text-lg font-medium rounded-md transition-all",
                                    activeTab === "home-value" ? "bg-white text-slate-900" : "text-white hover:bg-white/10",
                                )}
                            >
                                Home value
                            </TabsTrigger>
                        </TabsList>

                        <div className="bg-white rounded-b-lg p-4 flex items-center gap-2">
                            <div className="relative flex-1">
                                <Input
                                    type="text"
                                    placeholder="Address, School, City, Zip or Neighborhood"
                                    className="pl-4 pr-10 py-6 text-lg rounded-full border-2 border-gray-200 focus-visible:ring-offset-0"
                                />
                            </div>
                            <Button size="icon" className="rounded-full h-12 w-12 bg-slate-900 hover:bg-slate-800">
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search</span>
                            </Button>
                        </div>

                        <TabsContent value="buy" className="mt-0">
                        </TabsContent>
                        <TabsContent value="rent" className="mt-0">
                        </TabsContent>
                        <TabsContent value="sell" className="mt-0">
                        </TabsContent>
                        <TabsContent value="pre-approval" className="mt-0">
                        </TabsContent>
                        <TabsContent value="just-sold" className="mt-0">
                        </TabsContent>
                        <TabsContent value="home-value" className="mt-0">
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Hero