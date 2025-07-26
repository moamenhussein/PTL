import './title.css';
export default function Title({ title}) {
  return (
    <>
      <h3 className="headTitle text-3xl md:text-6xl">{title}</h3>
    </>
  );
}
