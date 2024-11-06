// Define the path to the CSV file
const dataUrl = 'Internet_data2.csv';

// Set up dimensions and margins
const margin = { top: 40, right: 30, bottom: 50, left: 60 },
      width = 800 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// Create SVG container
const svg = d3.select("#chart")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", `translate(${margin.left},${margin.top})`);

// Load the data
d3.csv(dataUrl, d3.autoType).then(data => {
    // Filter out rows with missing or non-numeric values in the "Value" column
    data = data.filter(d => d.Value && !isNaN(d.Value) && d.Year);

    // Set up scales
    const xScale = d3.scaleLinear()
                     .domain(d3.extent(data, d => d.Year)) // [min, max] of Year
                     .range([0, width]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.Value)]) // [0, max] of Value
                     .range([height, 0]);

    // Define line generator
    const line = d3.line()
                   .x(d => xScale(d.Year))
                   .y(d => yScale(d.Value));

    // Add the line path
    svg.append("path")
       .datum(data)
       .attr("fill", "none")
       .attr("stroke", "steelblue")
       .attr("stroke-width", 2)
       .attr("d", line);

    // X-axis
    svg.append("g")
       .attr("transform", `translate(0, ${height})`)
       .call(d3.axisBottom(xScale).tickFormat(d3.format("d"))); // Format as integers

    // Y-axis
    svg.append("g")
       .call(d3.axisLeft(yScale).ticks(10));

    // Axis labels
    svg.append("text")
       .attr("x", width / 2)
       .attr("y", height + margin.bottom - 10)
       .attr("text-anchor", "middle")
       .text("Year");

    svg.append("text")
       .attr("x", -height / 2)
       .attr("y", -margin.left + 15)
       .attr("transform", "rotate(-90)")
       .attr("text-anchor", "middle")
       .text("Internet Usage (%)");
}).catch(error => {
    console.error("Error loading or parsing data:", error);
});


















// // Set up dimensions and margins
// const margin = { top: 40, right: 30, bottom: 50, left: 60 },
//       width = 800 - margin.left - margin.right,
//       height = 500 - margin.top - margin.bottom;

// // Create SVG container
// const svg = d3.select("#chart")
//               .attr("width", width + margin.left + margin.right)
//               .attr("height", height + margin.top + margin.bottom)
//               .append("g")
//               .attr("transform", `translate(${margin.left},${margin.top})`);

// // Hardcoded dataset for testing
// const data = [
//     { Year: 2000, Value: 5.3 },
//     { Year: 2005, Value: 15.6 },
//     { Year: 2010, Value: 28.5 },
//     { Year: 2015, Value: 40.0 },
//     { Year: 2020, Value: 60.5 }
// ];

// // Check data in the console
// console.log("Testing data:", data);

// // Set up scales based on the hardcoded data
// const xScale = d3.scaleLinear()
//                  .domain(d3.extent(data, d => d.Year))
//                  .range([0, width]);

// const yScale = d3.scaleLinear()
//                  .domain([0, d3.max(data, d => d.Value)])
//                  .range([height, 0]);

// // Define line generator
// const line = d3.line()
//                .x(d => xScale(d.Year))
//                .y(d => yScale(d.Value));

// // Add the line path
// svg.append("path")
//    .datum(data)
//    .attr("fill", "none")
//    .attr("stroke", "steelblue")
//    .attr("stroke-width", 2)
//    .attr("d", line);

// // X-axis
// svg.append("g")
//    .attr("transform", `translate(0, ${height})`)
//    .call(d3.axisBottom(xScale).tickFormat(d3.format("d"))); // Format as integers

// // Y-axis
// svg.append("g")
//    .call(d3.axisLeft(yScale).ticks(10));

// // Axis labels
// svg.append("text")
//    .attr("x", width / 2)
//    .attr("y", height + margin.bottom - 10)
//    .attr("text-anchor", "middle")
//    .text("Year");

//    svg.append("text")
//    .attr("x", -height / 2)
//    .attr("y", -margin.left + 15)
//    .attr("transform", "rotate(-90)")
//    .attr("text-anchor", "middle")
//    .text("Internet Usage (%)");

// // Tooltip interactions (optional for testing)
// svg.selectAll("dot")
//    .data(data)
//    .enter().append("circle")
//    .attr("cx", d => xScale(d.Year))
//    .attr("cy", d => yScale(d.Value))
//    .attr("r", 5)
//    .attr("fill", "steelblue");





// // Data file path
// // const dataUrl = 'Internet_data.csv';

// // // Set up dimensions and margins
// // const margin = { top: 40, right: 30, bottom: 50, left: 60 },
// //       width = 800 - margin.left - margin.right,
// //       height = 500 - margin.top - margin.bottom;

// // // Create SVG container
// // const svg = d3.select("#chart")
// //               .attr("width", width + margin.left + margin.right)
// //               .attr("height", height + margin.top + margin.bottom)
// //               .append("g")
// //               .attr("transform", `translate(${margin.left},${margin.top})`);

// // // Tooltip for displaying details on hover
// // const tooltip = d3.select("#tooltip");

// // // Load the data
// // d3.csv(dataUrl, d3.autoType).then(data => {
// //     // Filter out unnecessary rows and parse data correctly
// //     console.log(data); // This will display the data in the console
// //     data = data.filter(d => !isNaN(d.Value)); // Keeps only rows with numerical values for internet usage
// //     data.forEach(d => d.Year = +d.Year); // Ensures year is a number

// //     // Check data after filtering
// //     console.log("Filtered data:", data);

// //     // (Rest of your chart code here...)

// //     // Set up scales
// //     const xScale = d3.scaleLinear()
// //                      .domain(d3.extent(data, d => d.Year))
// //                      .range([0, width]);
// //     const yScale = d3.scaleLinear()
// //                      .domain([0, d3.max(data, d => d.Value)])
// //                      .range([height, 0]);

// //     // Define line generator
// //     const line = d3.line()
// //                    .x(d => xScale(d.Year))
// //                    .y(d => yScale(d.Value));

// //     // Add the line path
// //     svg.append("path")
// //        .datum(data)
// //        .attr("fill", "none")
// //        .attr("stroke", "steelblue")
// //        .attr("stroke-width", 2)
// //        .attr("d", line);

// //     // X-axis
// //     svg.append("g")
// //        .attr("transform", `translate(0, ${height})`)
// //        .call(d3.axisBottom(xScale).tickFormat(d3.format("d"))); // Format as integers

// //     // Y-axis
// //     svg.append("g")
// //        .call(d3.axisLeft(yScale).ticks(10));

// //     // Axis labels
// //     svg.append("text")
// //        .attr("x", width / 2)
// //        .attr("y", height + margin.bottom - 10)
// //        .attr("text-anchor", "middle")
// //        .text("Year");

// //     svg.append("text")
// //        .attr("x", -height / 2)
// //        .attr("y", -margin.left + 15)
// //        .attr("transform", "rotate(-90)")
// //        .attr("text-anchor", "middle")
// //        .text("Internet Usage (%)");

// //     // Tooltip interactions
// //     svg.selectAll("dot")
// //        .data(data)
// //        .enter().append("circle")
// //        .attr("cx", d => xScale(d.Year))
// //        .attr("cy", d => yScale(d.Value))
// //        .attr("r", 5)
// //        .attr("fill", "steelblue")
// //        .on("mouseover", (event, d) => {
// //            tooltip.style("visibility", "visible")
// //                   .html(`Year: ${d.Year}<br>Usage: ${d.Value}%`);
// //        })
// //        .on("mousemove", event => {
// //            tooltip.style("top", `${event.pageY - 10}px`)
// //                   .style("left", `${event.pageX + 10}px`);
// //        })
// //        .on("mouseout", () => {
// //            tooltip.style("visibility", "hidden");
// //        });
// // });
