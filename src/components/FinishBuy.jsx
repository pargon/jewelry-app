import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FinishBuy({ condition }) {
  if (condition) {
    return (
      <div className="d-grid gap-2">
        <Button variant="dark" size="lg">
          <Link to={"checkout/"}>Finish</Link>
        </Button>
      </div>
    );
  }
}
export default FinishBuy;
// export default function App() {
//   return <FinishBuy condition={false}/>;  
// };
