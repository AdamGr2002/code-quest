import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Code, Shield, Sword, Trophy, Zap, Star, BookOpen, Users, Menu, X, LogOut, UserCircle } from "lucide-react";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import codequestLogo from "./assets/codequest.png";
export default function CodeWarriors() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <header className="container z-40 flex h-20 items-center justify-between py-6">
        <div className="flex items-center gap-2">
        <img src={codequestLogo} alt="CodeWarriors Logo" className="h-16 w-16" />
          <span className="text-xl font-bold">CodeQuest</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          <a href="#features" className="text-sm font-medium hover:text-purple-400">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-purple-400">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-purple-400">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-purple-400">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-4">
          {/* Clerk Auth Controls - Desktop */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className="hidden text-sm font-medium text-gray-300 hover:text-white sm:block">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button className="hidden sm:inline-flex bg-purple-600 hover:bg-purple-700">Start Your Quest</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button className="hidden sm:inline-flex bg-purple-600 hover:bg-purple-700">Start Your Quest</Button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 z-30 bg-gray-950 border-b border-gray-800">
          <nav className="container flex flex-col gap-4 py-4">
            <a href="#features" className="text-sm font-medium hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </a>
            {/* Clerk Auth Controls - Mobile */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className="w-full justify-start text-sm font-medium text-gray-300 hover:text-white sm:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 sm:hidden" onClick={() => setIsMobileMenuOpen(false)}>Start Your Quest</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <a href="/profile" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white sm:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                <UserCircle className="h-5 w-5" /> Profile
              </a>
              <SignOutButton>
                <Button variant="ghost" className="w-full justify-start text-sm font-medium text-gray-300 hover:text-white sm:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </Button>
              </SignOutButton>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 sm:hidden" onClick={() => setIsMobileMenuOpen(false)}>Start Your Quest</Button>
            </SignedIn>
          </nav>
        </div>
      )}

      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container relative z-10 grid gap-12 px-4 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <Badge className="inline-block bg-purple-600 px-3 py-1 text-sm font-medium text-white">
                  Beta Access Available
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Become a <span className="text-purple-500">Code Warrior</span> in a World of Programming
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transform your coding journey into an epic adventure. Level up, earn rewards, and defeat bugs in a
                  fantasy world built for developers.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Begin Your Adventure
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-700 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-gray-900 bg-gray-800"
                    >
                      <img
                        src={`https://via.placeholder.com/32`}
                        width={32}
                        height={32}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-gray-400">
                  <span className="font-medium text-white">1,200+</span> warriors have joined the quest
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
              <div className="relative z-10 overflow-hidden rounded-lg border border-purple-700/50 bg-gray-900/80 shadow-xl">
                <img
                  src="https://via.placeholder.com/600"
                  width={600}
                  height={600}
                  alt="Code Warrior character"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center opacity-10"></div>
        </section>

        <section id="features" className="py-20 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  Game Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Coding Adventure Awaits</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Embark on a journey where every line of code brings you closer to becoming a legendary Code Warrior.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-start gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-900/50 border-purple-900/50">
                <CardHeader>
                  <Sword className="h-10 w-10 text-purple-500 mb-4" />
                  <CardTitle className="text-xl text-white">Coding Quests</CardTitle>
                  <CardDescription className="text-gray-400">
                    Complete real-world coding challenges disguised as epic quests in a fantasy world.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="text-sm text-gray-400">Quest Difficulty:</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-yellow-500"
                          fill={star <= 3 ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-purple-900/50">
                <CardHeader>
                  <Trophy className="h-10 w-10 text-purple-500 mb-4" />
                  <CardTitle className="text-xl text-white">Level Up System</CardTitle>
                  <CardDescription className="text-gray-400">
                    Gain XP, level up your character, and unlock new abilities as you master coding skills.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Current Level: 7</span>
                      <span className="text-purple-400">350/500 XP</span>
                    </div>
                    <Progress value={70} className="h-2 bg-gray-800">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
                    </Progress>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-purple-900/50">
                <CardHeader>
                  <Zap className="h-10 w-10 text-purple-500 mb-4" />
                  <CardTitle className="text-xl text-white">Bug Battles</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fight against coding errors and bugs represented as monsters in epic battles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="text-sm text-gray-400">Defeated:</div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4 text-red-500" />
                      <span className="text-white font-medium">SyntaxError</span>
                      <span className="text-xs text-gray-500">Lvl 5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  Game Mechanics
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Code Warriors Works</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our unique approach transforms learning to code into an immersive RPG experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-purple-500/10 blur-2xl rounded-full"></div>
                <div className="relative z-10 overflow-hidden rounded-lg border border-purple-700/50 bg-gray-900/80 shadow-xl">
                  <img
                    src="https://via.placeholder.com/600"
                    width={600}
                    height={600}
                    alt="Game interface showing a coding challenge"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2">
                <div className="space-y-6">
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                        1
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Create Your Warrior</h3>
                        <p className="text-gray-400">
                          Choose your coding class (Frontend, Backend, Full-Stack) and customize your character.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                        2
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Embark on Quests</h3>
                        <p className="text-gray-400">
                          Accept coding challenges that match your skill level and preferred programming languages.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                        3
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Battle Bugs</h3>
                        <p className="text-gray-400">
                          Debug code and solve errors to defeat monsters and bosses in the fantasy world.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                        4
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">Level Up & Earn Rewards</h3>
                        <p className="text-gray-400">
                          Gain experience points, unlock new abilities, and collect rewards as you progress.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear from Our Warriors</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Developers who transformed their coding journey with Code Warriors.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Chen",
                  role: "Frontend Developer",
                  level: 15,
                  quote:
                    "I've tried many coding platforms, but Code Warriors makes learning actually fun. I've improved my JavaScript skills while having a blast!",
                },
                {
                  name: "Sarah Johnson",
                  role: "Full-Stack Developer",
                  level: 23,
                  quote:
                    "The gamification aspect keeps me motivated. I've been coding consistently for 3 months straight thanks to the quest system.",
                },
                {
                  name: "Miguel Rodriguez",
                  role: "Backend Developer",
                  level: 19,
                  quote:
                    "Debugging used to be frustrating, but now I look forward to bug battles! It's changed how I approach problem-solving.",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="bg-gray-900/50 border-purple-900/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500 bg-gray-800">
                        <img
                          src={`https://via.placeholder.com/48`}
                          width={48}
                          height={48}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>{testimonial.role}</span>
                          <span className="text-xs">•</span>
                          <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                            Level {testimonial.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  Pricing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Adventure Path</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select the journey that matches your coding ambitions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-900/50 border-purple-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-purple-500/20 blur-2xl rounded-full"></div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">Apprentice</CardTitle>
                  <div className="text-4xl font-bold">
                    $0<span className="text-lg font-normal text-gray-400">/month</span>
                  </div>
                  <CardDescription className="text-gray-400">
                    Start your coding journey with basic quests and challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Access to 10 beginner quests</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Basic character customization</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Community forum access</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Weekly coding challenges</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Start Free</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-purple-600/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/10"></div>
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 bg-purple-500/30 blur-3xl rounded-full"></div>
                <Badge className="absolute top-4 right-4 bg-purple-600">Popular</Badge>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-white">Warrior</CardTitle>
                  <div className="text-4xl font-bold">
                    $19<span className="text-lg font-normal text-gray-400">/month</span>
                  </div>
                  <CardDescription className="text-gray-300">
                    Level up faster with premium quests and exclusive rewards.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Everything in Apprentice</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Unlimited access to all quests</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Advanced character abilities</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Guild membership</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Monthly exclusive rewards</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Choose Warrior</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-purple-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-purple-500/20 blur-2xl rounded-full"></div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">Legend</CardTitle>
                  <div className="text-4xl font-bold">
                    $49<span className="text-lg font-normal text-gray-400">/month</span>
                  </div>
                  <CardDescription className="text-gray-400">
                    For serious coders seeking mastery and mentorship.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Everything in Warrior</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>1-on-1 mentorship sessions</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Legendary gear and abilities</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Early access to new features</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-purple-500" />
                      <span>Custom quest creation</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Become a Legend</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <Badge className="bg-purple-600 text-white">Join Now</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Begin Your Coding Adventure?
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Join thousands of developers who are leveling up their coding skills while having fun in our fantasy
                  world.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Start Your Journey
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-700 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    <div className="text-xl font-bold">10,000+</div>
                    <div className="text-sm text-gray-400">Active Warriors</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-purple-500" />
                    <div className="text-xl font-bold">500+</div>
                    <div className="text-sm text-gray-400">Coding Quests</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                    <div className="text-xl font-bold">12</div>
                    <div className="text-sm text-gray-400">Skill Paths</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-purple-500" />
                    <div className="text-xl font-bold">50+</div>
                    <div className="text-sm text-gray-400">Achievements</div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border border-purple-900/50 bg-gray-900/50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500 bg-gray-800">
                      <img
                        src={`https://via.placeholder.com/48`}
                        width={48}
                        height={48}
                        alt="Featured warrior"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Featured Warrior</div>
                      <div className="text-sm text-gray-400">This week's top performer</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Level 42 • Python Master</span>
                      <span className="text-purple-400">12,450 XP</span>
                    </div>
                    <Progress value={85} className="h-2 bg-gray-800">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
                    </Progress>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    "I went from struggling with basic algorithms to building full-stack applications in just 6 months!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-500" />
              <span className="text-lg font-bold">CodeWarriors</span>
            </div>
            <p className="text-sm text-gray-400">
              Transform your coding journey into an epic adventure with our gamified learning platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Subscribe</h3>
            <p className="text-sm text-gray-400">Stay updated with the latest quests and features.</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-gray-900 border-gray-800"
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500">By subscribing, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
        <div className="container mt-8 border-t border-gray-800 pt-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Code Warriors. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-400">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-400">
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
