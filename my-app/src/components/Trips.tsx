import { Card } from "../ui/Card/Card";
import { CardGrid } from "../ui/Grid/Grid";

export function Trips() {
  return (
    <CardGrid>
      <Card backgroundImage="https://picsum.photos/id/237/300">
        <Card.Content>
          <Card.Title>Diving adventure in Egypt</Card.Title>
          <Card.Subtitle>2 countries, 5 days</Card.Subtitle>
          <Card.Snack label="Emissions offset" value="3.56 t CO₂e" />
        </Card.Content>
        <Card.Rating title="Trip rating" rate={4} />
      </Card>

      <Card backgroundImage="https://picsum.photos/id/247/300">
        <Card.Content>
          <Card.Title>Diving adventure in Egypt</Card.Title>
          <Card.Subtitle>2 countries, 5 days</Card.Subtitle>
          <Card.Snack label="Emissions offset" value="3.56 t CO₂e" />
        </Card.Content>
        <Card.Rating title="Trip rating" rate={4} />
      </Card>

      <Card backgroundImage="https://picsum.photos/id/277/300">
        <Card.Content>
          <Card.Title>Diving adventure in Egypt</Card.Title>
          <Card.Subtitle>2 countries, 5 days</Card.Subtitle>
          <Card.Snack label="Emissions offset" value="3.56 t CO₂e" />
        </Card.Content>
        <Card.Rating title="Trip rating" rate={4} />
      </Card>
      <Card backgroundImage="https://picsum.photos/id/277/300">
        <Card.Content>
          <Card.Title>Diving adventure in Egypt</Card.Title>
          <Card.Subtitle>2 countries, 5 days</Card.Subtitle>
          <Card.Snack label="Emissions offset" value="3.56 t CO₂e" />
        </Card.Content>
        <Card.Rating title="Trip rating" rate={4} />
      </Card>
      <Card backgroundImage="https://picsum.photos/id/277/300">
        <Card.Content>
          <Card.Title>Diving adventure in Egypt</Card.Title>
          <Card.Subtitle>2 countries, 5 days</Card.Subtitle>
          <Card.Snack label="Emissions offset" value="3.56 t CO₂e" />
        </Card.Content>
        <Card.Rating title="Trip rating" rate={4} />
      </Card>
      <Card backgroundImage="https://picsum.photos/id/277/300">
        <Card.Content>
          <Card.Title>Diving adventure in Egypt</Card.Title>
          <Card.Subtitle>2 countries, 5 days</Card.Subtitle>
          <Card.Snack label="Emissions offset" value="3.56 t CO₂e" />
        </Card.Content>
        <Card.Rating title="Trip rating" rate={4} />
      </Card>
    </CardGrid>
  );
}
