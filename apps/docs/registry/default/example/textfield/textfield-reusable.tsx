import { JollyTextField } from "@/registry/default/ui/input"

export default function TextfieldReusable() {
  return (
    <div className="flex flex-col gap-4">
      <JollyTextField label="Name" description="Enter your name" isRequired />
      <JollyTextField
        textArea
        label="Review"
        description="Leave a review"
        isRequired
      />
    </div>
  )
}
