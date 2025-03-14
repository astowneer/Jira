"use client"

import { useSidebar } from './sidebar/SidebarContext'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import IssueFormToast from './IssueFormToast';

const IssueForm = () => {
  const { issueFormOpen, toggleIssuesForm } = useSidebar();
  
  if (!issueFormOpen) {
   return null;
  }

  return (
    <Card className="w-[350px] fixed right-5 bottom-5">
        <CardHeader className="flex flex-row items-center justify-between flex-1">
          <CardTitle className="flex items-center gap-2 select-none text-sm">
            <Image src="/svg/bookmark.svg" width={14} height={14} alt="file" style={{ filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)" }} />
            New Story
          </CardTitle>
          <div className="hover:bg-gray-200 p-1 rounded-md" onClick={toggleIssuesForm}>
            <X className="h-4 w-4" />
          </div>
      
        </CardHeader>
    
      <CardContent className="space-y-5">          
        <p className="text-xs">Required fields are marked with an asterisk <span className="text-red-500">*</span></p>

        <form>
          <div className="grid w-full items-center gap-4">

            <div className="flex flex-col space-y-1.5">
              <Label className="text-xs" htmlFor="project">Project <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger id="project" className="w-full rounded-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="service-of-railway">Сервіс залізничної компанії</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label className="text-xs" htmlFor="issue-type">Issue type <span className="text-red-500">*</span></Label>
                <Select>
                  <SelectTrigger id="issue-type" className="w-full rounded-sm">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="story">Story</SelectItem>
                    <SelectItem value="task">Task</SelectItem>
                    <SelectItem value="bug">Bug</SelectItem>
                    <SelectItem value="epic">Epic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label className="text-xs" htmlFor="status">Status <span className="text-red-500">*</span></Label>
                <Select>
                  <SelectTrigger id="status" className="w-full rounded-sm">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label className="text-xs" htmlFor="summary">Summary <span className="text-red-500">*</span></Label>
              <Input id="summary" placeholder="Summary of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          className="bg-blue-500 rounded-sm hover:bg-blue-600"
          onClick={() =>
            {
              toast.custom(() => <IssueFormToast />)
              toggleIssuesForm()
            }
          }
        >
          Create
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IssueForm;