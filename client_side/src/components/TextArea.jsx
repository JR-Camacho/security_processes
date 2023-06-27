import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { LinkIcon } from "@heroicons/react/24/outline";

const TextArea = ({
  name,
  placeholder,
  value,
  setValue,
  handleClick,
  loading,
}) => {
  const handleSetData = (e) => setValue({ [name]: e.target.value });

  const handleCopyClick = () => navigator.clipboard.writeText(value[name]);

  const clear = () => setValue({ [name]: "" });

  return (
    <div className="relative w-11/12 md:w-[42rem]">
      <Textarea
        variant="static"
        placeholder={placeholder}
        rows={8}
        value={value[name]}
        name={name}
        onChange={(e) => handleSetData(e)}
      />
      <div className="w-full flex justify-between py-1.5">
        <IconButton
          variant="text"
          color="blue-gray"
          size="sm"
          onClick={handleCopyClick}
        >
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
          <Button
            size="sm"
            className="rounded-md"
            onClick={handleClick}
            disabled={loading}
          >
            Analyze
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
