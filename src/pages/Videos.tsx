import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, Calendar, Eye, Plus } from "lucide-react";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<typeof videos[0] | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    setOpen(false);
    setEditingVideo(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Videos</h1>
            <p className="text-muted-foreground mt-2">Manage your video content</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Video
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingVideo ? "Edit Video" : "Add New Video"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter video title" defaultValue={editingVideo?.title} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Thumbnail URL</Label>
                  <Input id="thumbnail" placeholder="https://..." defaultValue={editingVideo?.thumbnail} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="0:00" defaultValue={editingVideo?.duration} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="views">Views</Label>
                  <Input id="views" placeholder="0" defaultValue={editingVideo?.views} required />
                </div>
                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingVideo ? "Update" : "Add"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="border-border bg-card hover:bg-card/80 transition-all hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => {
                setEditingVideo(video);
                setOpen(true);
              }}
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
