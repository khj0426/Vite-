import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function DetailCard() {
  return (
    <Card
      title="hh"
      subTitle="
    hhh"
    >
      <p>asdasdasd</p>
      <div>
        <Button label="Save" icon="pi pi-check" />
        <Button
          label="Cancel"
          icon="pi pi-times"
          className="p-button-outlined p-button-secondary"
        />
      </div>
    </Card>
  );
}

export default DetailCard;
