import Card from "../UI/Card";
import AddOnSelect from "../AddOnSelect";

const Three = () => {
  return (
    <Card
      headingContent="Pick add-ons"
      subHeadingContent="Add-ons help enhance your gaming experience."
    >
      <AddOnSelect />
    </Card>
  );
};

export default Three;
