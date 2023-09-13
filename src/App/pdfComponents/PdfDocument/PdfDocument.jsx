import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
export default function pdfDocument(props) {
  return (
    <Document>
      <Page>
        <View>
            <Text style={{color:"blue",fontSize:"18pt", textAlign:'center'}}>{props.meme.titre}
            </Text>
        </View>
      </Page>
    </Document>
  );
}
