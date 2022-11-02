import {
  Collapse,
  Text,
  Grid,
  Avatar,
  Link,
  Badge,
  Spacer,
} from "@nextui-org/react";

const AuditFindingCard: React.FC<{ findings: any }> = ({ findings }) => {
  return (
    <Grid.Container gap={0}>
      <Grid >
        <Collapse.Group css={{ height:'10vh !important'}}>
          {findings.map((finding: any) => {
            // const customSubtitle = `${finding.status}  |  ${finding.location.type}  |  ${finding.location.name}  |  [${finding.location.line_number[0].start}, ${finding.location.line_number[0].end}]`;
            return (
              <Collapse
                title={<Text h4>{finding.title}</Text>}
                subtitle={`customSubtitle`}
                contentLeft={
                  <Badge color="warning">{finding.classification}</Badge>
                }
              >
                <Text h5>Description</Text>
                <Text>{finding.description}</Text>
                <Spacer y={1} />
                <Text h5>Recommendation</Text>
                <Text>{finding.recommendation}</Text>
              </Collapse>
            );
          })}
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
};

export default AuditFindingCard;
