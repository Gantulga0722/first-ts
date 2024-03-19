type contentType = [name: string, price: number, isVerifide: boolean];

type data = [
  {
    title: string;
    buttonText: string;
    content: contentType[];
  }
];

export function PhoneCard({ sideMenuData }: { sideMenuData: data }) {
  console.log(sideMenuData);
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
