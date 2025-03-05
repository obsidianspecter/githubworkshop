"use client"

import { motion } from "framer-motion"
import { Code, Users, BookOpen, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function WorkshopContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.section variants={container} initial="hidden" animate="show" className="my-16">
      <Tabs defaultValue="agenda" className="w-full">
        <motion.div variants={item}>
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="speakers">Speakers</TabsTrigger>
            <TabsTrigger value="takeaways">Takeaways</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="agenda" className="mt-6">
          <motion.div variants={item}>
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Workshop Agenda
                </CardTitle>
                <CardDescription>A comprehensive day of learning and hands-on practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">9:00 AM - Introduction to Git</h3>
                    <p className="text-gray-400">Understanding version control fundamentals</p>
                  </div>
                  <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">10:30 AM - Basic Git Commands</h3>
                    <p className="text-gray-400">Hands-on practice with essential commands</p>
                  </div>
                  <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">12:00 PM - Lunch Break</h3>
                    <p className="text-gray-400">Networking opportunity with refreshments provided</p>
                  </div>
                  <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">1:00 PM - GitHub Collaboration</h3>
                    <p className="text-gray-400">Pull requests, issues, and project management</p>
                  </div>
                  <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">2:30 PM - Advanced Git Techniques</h3>
                    <p className="text-gray-400">Branching strategies, rebasing, and conflict resolution</p>
                  </div>
                  <div className="relative border-l border-gray-700 pl-6">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">3:30 PM - Q&A and Closing</h3>
                    <p className="text-gray-400">Open discussion and next steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="speakers" className="mt-6">
          <motion.div variants={item}>
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Workshop Speakers
                </CardTitle>
                <CardDescription>Learn from industry experts with years of experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mathesh.jpg-rIlHph5UWbzk74IX3eqm8ESsRgwtOr.jpeg"
                        alt="Mathesh"
                      />
                      <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Mathesh</h3>
                      <p className="text-sm text-primary">ECE 3rd Year</p>
                      <p className="mt-1 text-sm text-gray-400">
                        Python Developer with expertise in version control systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anvin.jpg-0wUGYjfAplAk0RrWTaKLwd5t3FiZyo.jpeg"
                        alt="Anvin"
                      />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Anvin</h3>
                      <p className="text-sm text-primary">CSE 3rd Year</p>
                      <p className="mt-1 text-sm text-gray-400">
                        ML Engineer with experience in collaborative development
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="takeaways" className="mt-6">
          <motion.div variants={item}>
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Key Takeaways
                </CardTitle>
                <CardDescription>What you'll learn from this comprehensive workshop</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <h3 className="mb-2 text-lg font-medium">Git Fundamentals</h3>
                    <ul className="ml-5 list-disc space-y-1 text-sm text-gray-400">
                      <li>Understanding repositories, commits, and branches</li>
                      <li>Mastering the Git workflow</li>
                      <li>Effective commit message practices</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <h3 className="mb-2 text-lg font-medium">Collaboration Skills</h3>
                    <ul className="ml-5 list-disc space-y-1 text-sm text-gray-400">
                      <li>Working with remote repositories</li>
                      <li>Pull request etiquette and best practices</li>
                      <li>Code review techniques</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <h3 className="mb-2 text-lg font-medium">Problem Solving</h3>
                    <ul className="ml-5 list-disc space-y-1 text-sm text-gray-400">
                      <li>Resolving merge conflicts</li>
                      <li>Debugging with Git tools</li>
                      <li>Recovering from common mistakes</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <h3 className="mb-2 text-lg font-medium">Advanced Techniques</h3>
                    <ul className="ml-5 list-disc space-y-1 text-sm text-gray-400">
                      <li>Git hooks and automation</li>
                      <li>Rebasing vs. merging strategies</li>
                      <li>GitHub Actions for CI/CD</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="requirements" className="mt-6">
          <motion.div variants={item}>
            <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Workshop Requirements
                </CardTitle>
                <CardDescription>What you need to bring and prepare for the workshop</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <h3 className="mb-2 text-lg font-medium">Technical Requirements</h3>
                    <ul className="ml-5 list-disc space-y-1 text-gray-400">
                      <li>Laptop with Git installed (instructions will be sent)</li>
                      <li>GitHub account (free tier is sufficient)</li>
                      <li>Basic command line familiarity</li>
                      <li>Your preferred code editor</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <h3 className="mb-2 text-lg font-medium">Prerequisites</h3>
                    <ul className="ml-5 list-disc space-y-1 text-gray-400">
                      <li>Basic programming knowledge in any language</li>
                      <li>Understanding of file systems and navigation</li>
                      <li>No prior Git experience required</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <h3 className="mb-2 text-lg font-medium">Preparation</h3>
                    <p className="text-gray-400">
                      One week before the workshop, you'll receive a preparation email with:
                    </p>
                    <ul className="ml-5 list-disc space-y-1 mt-2 text-gray-400">
                      <li>Installation instructions for all required software</li>
                      <li>Pre-workshop reading materials (optional)</li>
                      <li>A brief survey to help tailor the content to participants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.section>
  )
}

