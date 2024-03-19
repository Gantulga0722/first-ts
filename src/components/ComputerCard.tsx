type contentType = { name: string; price: number; isVerifide: boolean };

type data = {
  title: string;
  buttonText: string;
  content: contentType[];
};

export function ComputerCard({ sideMenuData }: { sideMenuData: Array<data> }) {
  return (
    <div>
      <div className="flex flex-col rounded-lg border">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
