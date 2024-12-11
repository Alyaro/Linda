export interface Article {
  title: string;
  summary: string;
  category: string;
  image: string;
  publishDate: Date;
  author: string;
}

export const featuredArticles: Article[] = [
  {
    title: "SpaceX Successfully Launches New Satellite Constellation",
    summary: "The aerospace company's latest mission puts 60 more Starlink satellites into orbit, expanding global internet coverage.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: new Date("2024-03-15"),
    author: "Sarah Johnson"
  },
  {
    title: "Global Economy Shows Signs of Recovery",
    summary: "Latest economic indicators suggest a robust recovery across major markets, with growth exceeding expectations.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: new Date("2024-03-14"),
    author: "Michael Chen"
  },
  {
    title: "Breakthrough in Renewable Energy Storage",
    summary: "Scientists develop new battery technology that could revolutionize renewable energy storage capabilities.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: new Date("2024-03-13"),
    author: "Emily Rodriguez"
  }
];

export const latestArticles: Article[] = [
  {
    title: "Major Sports League Announces Expansion Teams",
    summary: "Two new teams will join the league in the 2025 season, marking the biggest expansion in a decade.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: new Date("2024-03-15"),
    author: "James Wilson"
  },
  {
    title: "New Health Guidelines Released",
    summary: "Updated recommendations focus on mental health and work-life balance in post-pandemic era.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: new Date("2024-03-14"),
    author: "Dr. Lisa Park"
  },
  {
    title: "Entertainment Industry Embraces AI",
    summary: "Studios begin implementing AI tools in production, raising questions about the future of creativity.",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: new Date("2024-03-13"),
    author: "Alex Thompson"
  }
];