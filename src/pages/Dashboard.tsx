import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Image, FolderOpen, DollarSign, TrendingUp, Clock } from "lucide-react";

const stats = [
  { title: "Total Videos", value: "247", icon: Video, change: "+12%" },
  { title: "Total Images", value: "1,834", icon: Image, change: "+23%" },
  { title: "Active Projects", value: "12", icon: FolderOpen, change: "+3" },
  { title: "Total Sales", value: "$45,231", icon: DollarSign, change: "+18%" },
];

const recentUploads = [
  { title: "Epic Sunset Scene", type: "Video", date: "2 hours ago" },
  { title: "Product Photography Set", type: "Images", date: "5 hours ago" },
  { title: "Documentary Footage", type: "Video", date: "1 day ago" },
  { title: "Behind the Scenes", type: "Video", date: "2 days ago" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your content overview</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center text-xs text-secondary mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>{stat.change} from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Uploads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUploads.map((upload, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded">
                      {upload.type === "Video" ? (
                        <Video className="h-4 w-4 text-primary" />
                      ) : (
                        <Image className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{upload.title}</p>
                      <p className="text-sm text-muted-foreground">{upload.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {upload.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
