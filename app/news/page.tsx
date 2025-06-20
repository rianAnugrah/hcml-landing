"use client";

import { useState, useEffect } from "react";
import { Clock, User, ChevronRight } from "lucide-react";

// Mock data - can be replaced with API call later
const mockNewsData = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    summary:
      "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnostics worldwide.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15T10:30:00Z",
    category: "Technology",

    featured: true,
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    summary:
      "World leaders unite on ambitious climate goals for the next decade.",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Michael Chen",
    publishedAt: "2024-01-14T14:20:00Z",
    category: "Environment",

    featured: true,
  },
  {
    id: 3,
    title: "Stock Markets Hit Record Highs Amid Economic Recovery",
    summary:
      "Major indices surge as investors show confidence in economic outlook.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Emma Rodriguez",
    publishedAt: "2024-01-14T09:15:00Z",
    category: "Finance",

    featured: false,
  },
  {
    id: 4,
    title: "Space Mission Discovers New Exoplanets",
    summary:
      "NASA's latest mission identifies potentially habitable worlds beyond our solar system.",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Dr. James Wilson",
    publishedAt: "2024-01-13T16:45:00Z",
    category: "Science",

    featured: false,
  },
  {
    id: 5,
    title: "Olympic Games Preparation Enters Final Phase",
    summary:
      "Athletes and organizers make final preparations for the upcoming international competition.",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "Lisa Park",
    publishedAt: "2024-01-13T11:30:00Z",
    category: "Sports",

    featured: false,
  },
  {
    id: 6,
    title: "New Educational Initiative Launches Nationwide",
    summary:
      "Government announces comprehensive program to enhance digital literacy in schools.",
    content:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    author: "Robert Kim",
    publishedAt: "2024-01-12T13:20:00Z",
    category: "Education",

    featured: false,
  },
];

const categoryColors = {
  Technology: "bg-cyan-500",
  Environment: "bg-emerald-500",
  Finance: "bg-amber-500",
  Science: "bg-violet-500",
  Sports: "bg-rose-500",
  Education: "bg-blue-500",
};

export default function NewsPage() {
  const [news, setNews] = useState(mockNewsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  // Function to fetch news - can be replaced with actual API call
  const fetchNews = async (category = "All") => {
    setLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Filter mock data by category
    const filteredNews =
      category === "All"
        ? mockNewsData
        : mockNewsData.filter((article) => article.category === category);

    setNews(filteredNews);
    setLoading(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const categories = [
    "All",
    ...Array.from(new Set(mockNewsData.map((article) => article.category))),
  ];
  const featuredNews = news.filter((article) => article.featured);
  const regularNews = news.filter((article) => !article.featured);

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b-4 border-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                NEWS
              </h1>
              <p className="text-lg text-gray-300 mt-1">
                Stay informed with the latest updates
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-cyan-500 text-white px-4 py-2 rounded-none font-semibold">
                LIVE
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-xl font-semibold text-gray-300">
              Loading news...
            </div>
          </div>
        ) : (
          <>
            {/* Featured News */}
            {featuredNews.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                  Featured Stories
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featuredNews.map((article) => (
                    <article
                      key={article.id}
                      className="bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 group cursor-pointer border border-gray-700"
                    >
                      <div className="relative">
                        <img
                         src={
                            article?.imageUrl ||
                            `https://picsum.photos/600/400?random=${article?.id || Math.random()}`
                          }
                          alt={article.title}
                          className="w-full h-64 object-cover"
                        />
                        <div
                          className={`absolute top-4 left-4 px-3 py-1 text-white text-sm font-semibold uppercase ${
                            categoryColors[article.category]
                          }`}
                        >
                          {article.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">
                          {article.summary}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {article.author}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {formatDate(article.publishedAt)}
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Regular News Grid */}
            {regularNews.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                  Latest News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularNews.map((article) => (
                    <article
                      key={article.id}
                      className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-gray-700"
                    >
                      <div className="relative">
                        <img
                         src={
                            article?.imageUrl ||
                            `https://picsum.photos/600/400?random=${article?.id || Math.random()}`
                          }
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        <div
                          className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-semibold uppercase ${
                            categoryColors[article.category]
                          }`}
                        >
                          {article.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {article.summary}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {formatDate(article.publishedAt)}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {news.length === 0 && (
              <div className="text-center py-12">
                <div className="text-xl font-semibold text-gray-300 mb-2">
                  No news found
                </div>
                <p className="text-gray-400">
                  Try selecting a different category
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">NEWS</h3>
            <p className="text-gray-400">
              Your trusted source for breaking news and updates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
