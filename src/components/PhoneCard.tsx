type contentType = { name: string; price: number; isVerifide: boolean };

type data = {
  title: string;
  buttonText: string;
  content: contentType[];
};

export function PhoneCard({ sideMenuData }: { sideMenuData: Array<data> }) {
  console.log(sideMenuData);
  return (
    <div>
      <div className="flex w-[200px] h-[600px] flex-col rounded-lg border">
        {sideMenuData.map((e) => {
          <div className="flex ">{e.title}</div>;
        })}
      </div>
    </div>
  );
}
