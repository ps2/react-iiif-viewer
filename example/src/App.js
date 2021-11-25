import React, { Component } from 'react'
import Viewer from '../../src/components/Viewer'
import MultiViewer from '../../src/components/MultiViewer'

export default function App() {

  const images = [
  {
    url: "https://data.getty.edu/museum/api/iiif/671108/info.json",
    title: "Image1",
  },
  {
    url: "https://data.getty.edu/museum/api/iiif/194801/info.json",
    title: "Image2",
  },
  {
    url: "https://data.getty.edu/museum/api/iiif/268179/info.json",
    title: "Image3",
  }
  ]

  function onIndexChange(newIndex) {
    console.log("New index:", newIndex)
  }

  return (
    <>
      <div className="description">
        <h2>MultiViewer</h2>
        <p>A component for displaying many IIIF images via an expandable thumbnail drawer.</p>
      </div>

      <MultiViewer
        height="600px"
        width="100%"
        iiifUrls={images.map(x => x.url)}
        currentIndexChanged={onIndexChange}
        currentIndex={2}
      />

      <div className="description">
        <h2>Viewer</h2>
        <p>A simple component for displaying one IIIF image at a time.</p>
      </div>
      <Viewer
        height="600px"
        width="100%"
        iiifUrl="https://data.getty.edu/museum/api/iiif/635494/info.json"
      />


    </>
  )
}
