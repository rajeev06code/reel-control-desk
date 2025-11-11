import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Plus } from "lucide-react";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<typeof projects[0] | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    setOpen(false);
    setEditingProject(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-2">Manage your film projects</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Project Name</Label>
                  <Input id="name" placeholder="Enter project name" defaultValue={editingProject?.name} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter project description" defaultValue={editingProject?.description} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={editingProject?.status || "In Progress"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Review">Review</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team">Team Members</Label>
                  <Input id="team" type="number" placeholder="0" defaultValue={editingProject?.team} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" defaultValue={editingProject?.deadline} required />
                </div>
                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? "Update" : "Add"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="border-border bg-card hover:bg-card/80 transition-colors cursor-pointer"
              onClick={() => {
                setEditingProject(project);
                setOpen(true);
              }}
            >
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
