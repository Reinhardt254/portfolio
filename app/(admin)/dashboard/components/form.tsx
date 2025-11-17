"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface formButtonProps {
  data: string;
}

const FormButton: React.FC<formButtonProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = async (data: string) => {
    try {
      await axios.delete(`/api/messages/${data}`);
      toast.success("Message deleted successfully");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => handleClick(data)}
      className="text-red-600 hover:text-red-700 hover:bg-red-50"
    >
      <Trash className="w-4 h-4" />
    </Button>
  );
};

export default FormButton;
