import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Summer Campaign 2024",
    description: "Commercial video series for new product launch",
    status: "In Progress",
    team: 8,
    deadline: "2024-04-15",
  },
  {
    id: 2,
    name: "Documentary Series",
    description: "5-part documentary about urban development",
    status: "In Progress",
    team: 12,
    deadline: "2024-05-20",
  },
  {
    id: 3,
    name: "Corporate Training Videos",
    description: "Internal training material for onboarding",
    status: "Review",
    team: 4,
    deadline: "2024-03-30",
  },
  {
    id: 4,
    name: "Music Video Production",
    description: "Music video for emerging artist",
    status: "Completed",
    team: 6,
    deadline: "2024-03-10",
  },
];

const statusColors: Record<string, string> = {
  "In Progress": "bg-secondary/20 text-secondary",
  Review: "bg-yellow-500/20 text-yellow-500",
  Completed: "bg-green-500/20 text-green-500",
};

const Projects = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-2">Manage your film projects</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-foreground">{project.name}</CardTitle>
                  <Badge className={statusColors[project.status]}>{project.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.team} team members
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Due: {project.deadline}
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

export default Projects;
