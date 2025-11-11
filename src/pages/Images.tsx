import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Download } from "lucide-react";

const images = [
  {
    id: 1,
    title: "City Lights",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop",
    uploadDate: "2024-03-15",
  },
  {
    id: 2,
    title: "Mountain Vista",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    uploadDate: "2024-03-14",
  },
  {
    id: 3,
    title: "Urban Portrait",
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop",
    uploadDate: "2024-03-13",
  },
  {
    id: 4,
    title: "Nature Closeup",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
    uploadDate: "2024-03-12",
  },
  {
    id: 5,
    title: "Abstract Art",
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=400&fit=crop",
    uploadDate: "2024-03-11",
  },
  {
    id: 6,
    title: "Sunset Beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
    uploadDate: "2024-03-10",
  },
];

const Images = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Images</h1>
          <p className="text-muted-foreground mt-2">Browse your image gallery</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <Card
              key={image.id}
              className="border-border bg-card hover:bg-card/80 transition-all hover:scale-105 cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-square">
                <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Download className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {image.uploadDate}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Images;
