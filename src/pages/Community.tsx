
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { LeafIcon } from '@/assets/icons';

const challenges = [
  {
    id: 1,
    title: 'Zero Waste Week',
    description: 'Live without producing any non-recyclable waste for a week.',
    participants: 587,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Plant 5 Trees',
    description: 'Plant at least 5 trees in your community this month.',
    participants: 423,
    badge: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Stubble Management',
    description: 'Apply sustainable stubble management practices on your farm.',
    participants: 156,
    badge: 'Farmers',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1374&auto=format&fit=crop'
  }
];

const forumPosts = [
  {
    id: 1,
    title: 'Best practices for stubble collection',
    author: 'Farmer Raj',
    date: '3 days ago',
    comments: 17,
    likes: 42
  },
  {
    id: 2,
    title: 'Using stubble compost for home gardening',
    author: 'GreenThumb',
    date: '1 week ago',
    comments: 24,
    likes: 56
  },
  {
    id: 3,
    title: 'Experiences with stubble-based packaging?',
    author: 'EcoTrader',
    date: '2 weeks ago',
    comments: 9,
    likes: 31
  },
  {
    id: 4,
    title: 'Innovation ideas: New products from agricultural waste',
    author: 'Innovator2023',
    date: '3 weeks ago',
    comments: 41,
    likes: 88
  }
];

const events = [
  {
    id: 1,
    title: 'EcoHarvest Annual Conference',
    date: 'June 15-16, 2025',
    location: 'Delhi Convention Center',
    description: 'Join us for two days of talks, workshops, and networking focused on agricultural sustainability.'
  },
  {
    id: 2,
    title: 'Sustainable Farming Workshop',
    date: 'July 10, 2025',
    location: 'Multiple locations across Punjab',
    description: 'Learn practical techniques for sustainable farming and stubble management.'
  },
  {
    id: 3,
    title: 'Farm to Product Showcase',
    date: 'August 5, 2025',
    location: 'Mumbai Exhibition Center',
    description: 'See the journey from agricultural waste to finished eco-products.'
  }
];

const leaderboard = [
  { rank: 1, name: 'Priya Singh', points: 1256, badge: 'Champion' },
  { rank: 2, name: 'Amit Kumar', points: 1187, badge: 'Pioneer' },
  { rank: 3, name: 'Ravi Patel', points: 1045, badge: 'Innovator' },
  { rank: 4, name: 'Sanjay Gupta', points: 978, badge: 'Guardian' },
  { rank: 5, name: 'Neha Sharma', points: 894, badge: 'Steward' }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState('challenges');
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-6 md:text-4xl">Community Hub</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              Connect with like-minded individuals, share ideas, and participate in 
              challenges to create a more sustainable future.
            </p>
            
            {/* Tab navigation */}
            <div className="flex flex-wrap border-b mb-8">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'challenges' 
                    ? 'border-b-2 border-eco-leaf text-eco-leaf' 
                    : 'text-foreground/80 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('challenges')}
              >
                Challenges
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'forum' 
                    ? 'border-b-2 border-eco-leaf text-eco-leaf' 
                    : 'text-foreground/80 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('forum')}
              >
                Discussion Forum
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'events' 
                    ? 'border-b-2 border-eco-leaf text-eco-leaf' 
                    : 'text-foreground/80 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('events')}
              >
                Events
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'leaderboard' 
                    ? 'border-b-2 border-eco-leaf text-eco-leaf' 
                    : 'text-foreground/80 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('leaderboard')}
              >
                Leaderboard
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">
            {/* Challenges Tab */}
            {activeTab === 'challenges' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Eco-Challenges</h2>
                  <Button className="bg-eco-leaf hover:bg-eco-leaf/90">
                    Join a Challenge
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {challenges.map((challenge) => (
                    <div key={challenge.id} className="eco-card overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={challenge.image} 
                          alt={challenge.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{challenge.title}</h3>
                          <span className="bg-eco-leaf text-white text-xs font-medium rounded-full px-2.5 py-1">
                            {challenge.badge}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {challenge.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{challenge.participants} participants</span>
                          <Button size="sm" variant="outline">Join</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Forum Tab */}
            {activeTab === 'forum' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Discussion Forum</h2>
                  <Button className="bg-eco-leaf hover:bg-eco-leaf/90">
                    New Post
                  </Button>
                </div>
                <div className="divide-y">
                  {forumPosts.map((post) => (
                    <div key={post.id} className="py-4 hover:bg-muted/30 px-4 rounded-md cursor-pointer transition-colors">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-lg">{post.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{post.comments} comments</span>
                          <span>{post.likes} likes</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Posted by {post.author} • {post.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <Button className="bg-eco-leaf hover:bg-eco-leaf/90">
                    Submit Event
                  </Button>
                </div>
                <div className="space-y-6">
                  {events.map((event) => (
                    <div key={event.id} className="eco-card p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            {event.date} • {event.location}
                          </div>
                          <p className="mt-2">
                            {event.description}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Register</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leaderboard Tab */}
            {activeTab === 'leaderboard' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8">Eco-Champion Leaderboard</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left">Rank</th>
                        <th className="px-4 py-3 text-left">Name</th>
                        <th className="px-4 py-3 text-left">Points</th>
                        <th className="px-4 py-3 text-left">Badge</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((user) => (
                        <tr key={user.rank} className="border-b hover:bg-muted/30">
                          <td className="px-4 py-3">#{user.rank}</td>
                          <td className="px-4 py-3 font-medium">{user.name}</td>
                          <td className="px-4 py-3">{user.points}</td>
                          <td className="px-4 py-3">
                            <span className="flex items-center gap-1">
                              <LeafIcon size={16} className="text-eco-leaf" />
                              {user.badge}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
