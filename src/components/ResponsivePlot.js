import ontology3d from './ontology3d.json';
import { useState, useEffect } from 'react';

export function ResponsivePlot() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Plot = require('react-plotly.js').default;

  const showLegend = width > 720;
  const zoomRatio = 0.97;

  return (
    <div style={{
      width: '100%',
      height: 'clamp(400px, 50vh, 600px)',
      position: 'relative'
    }}>
      <Plot
        data={ontology3d.data}
        layout={{
          ...ontology3d.layout,
          title: {
            text: '*Loops disappear into layout. Data, or state, is the shadow cast by collapsed possibility.',
            font: { size: 12, color: '#343434' },
            x: 0.5,
            y: 0.06
          },
          autosize: true,
          height: undefined,
          width: undefined,
          scene: {
            ...ontology3d.layout.scene,
            dragmode: 'turntable',
            camera: {
              eye: { x: -1.2 * 1 / zoomRatio, y: 1.5 * 1 / zoomRatio, z: 0.65 * 1 / zoomRatio },
              center: { x: 0, y: 0, z: -0.2 },
            },
            aspectratio: { x: 1, y: 1, z: 0.75 },
            xaxis: { title: '', showgrid: true },
            yaxis: { title: '', showgrid: true },
            zaxis: { title: '', showgrid: true },
          },
          margin: { l: 0, r: 0, b: 0, t: 0 },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          showlegend: showLegend,
        }}
        style={{ width: "100%", height: "100%" }}
        useResizeHandler={true}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}