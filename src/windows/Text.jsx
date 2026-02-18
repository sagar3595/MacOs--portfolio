import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-4 overflow-y-auto h-full bg-white text-black">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-auto mb-4 rounded"
          />
        )}
        {data.subtitle && (
          <h3 className="text-xl font-bold mb-2">{data.subtitle}</h3>
        )}
        <div className="space-y-4">
          {data.description &&
            data.description.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
