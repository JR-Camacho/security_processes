import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { LinkIcon } from "@heroicons/react/24/outline";

const TextArea = ({ placeholder, value, setValue }) => {
  const handleSetData = (e) => setValue(e.target.value);

  const clear = () => setValue("");

  return (
    <div className="relative w-11/12 md:w-[42rem]">
      <Textarea
        variant="static"
        placeholder={placeholder}
        rows={8}
        value={value}
        onChange={(e) => handleSetData(e)}
      />
      <div className="w-full flex justify-between py-1.5">
        <IconButton variant="text" color="blue-gray" size="sm">
          <LinkIcon strokeWidth={2} className="w-4 h-4" />
        </IconButton>
        <div className="flex gap-2">
          <Button
            size="sm"
            color="red"
            variant="text"
            className="rounded-md"
            onClick={clear}
          >
            Clear
          </Button>
          <Button size="sm" className="rounded-md">
            Analyze
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
