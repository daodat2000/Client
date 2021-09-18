import React, { useContext } from 'react';
import { CardItem } from './CardItem';
import { Grid } from 'semantic-ui-react';

export const CardList = () => {
  const as = [1, 2, 3, 4, 5];
  return (
    <>
      <br />
      <Grid container style={{ padding: '5em 0em' }}>
        {as.map((a, i) => (
          <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
            <CardItem card={a} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};
