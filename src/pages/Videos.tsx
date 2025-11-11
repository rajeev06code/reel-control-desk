import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, Eye } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Epic Sunset Scene",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop",
    uploadDate: "2024-03-15",
    views: "12.5K",
    duration: "4:32",
  },
  {
    id: 2,
    title: "Documentary Footage",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
    uploadDate: "2024-03-14",
    views: "8.2K",
    duration: "12:15",
  },
  {
    id: 3,
    title: "Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1574267432644-f74f8ec55326?w=400&h=300&fit=crop",
    uploadDate: "2024-03-13",
    views: "15.7K",
    duration: "7:45",
  },
  {
    id: 4,
    title: "Product Showcase",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop",
    uploadDate: "2024-03-12",
    views: "9.3K",
    duration: "3:20",
  },
];

const Videos = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Videos</h1>
          <p className="text-muted-foreground mt-2">Manage your video content</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="border-border bg-card hover:bg-card/80 transition-all hover:scale-105 cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {video.uploadDate}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {video.views}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Videos;
