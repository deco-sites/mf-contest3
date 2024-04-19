export interface Props {
  spacing?: "small" | "medium" | "large";
}

export default function Spacing({ spacing = "medium" }: Props) {
  const variations = {
    small: "py-5",
    medium: "py-10",
    large: "py-20",
  };

  const style = variations[spacing] ?? variations["medium"];

  return <div class={`${style}`}></div>;
}
