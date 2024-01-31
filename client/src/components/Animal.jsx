export default function ({type, name, age }) {
  return (
    <div className="animal">
      <strong>{type}</strong> {name} ({age} years old)
    </div>
  );
}