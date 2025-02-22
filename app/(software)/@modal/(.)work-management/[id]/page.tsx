import WorkManagementModal from "@/components/WorkManagementModal";
import { workManagements } from "@/constants/constants";

export default async function WorkManagement({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { 
    title, 
    subtitle,
    description, 
    imageMainUrl, 
    posibilities 
  } = workManagements[Number(id)];

  return (
    <WorkManagementModal
      title={title}
      subtitle={subtitle}
      description={description}
      imageMainUrl={imageMainUrl}
      posibilities={posibilities}
    />
  );
}
