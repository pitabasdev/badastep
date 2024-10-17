fetch('http://localhost:5000/colleges')
    .then(response => response.json())
    .then(data => {
      const colleges = data.colleges;
      const tableBody = document.getElementById('college-table-body');
      
      colleges.forEach(college => {
        // Create table row
        const row = document.createElement('tr');
        
        // Rank column
        const rankCell = document.createElement('td');
        rankCell.textContent = college.rank;
        row.appendChild(rankCell);
        
        // College column with image and link
        const collegeCell = document.createElement('td');
        collegeCell.innerHTML = `
          <img src="${college.image}" width="50" height="50" class="mr-2" />
          <a href="#" target="_blank">${college.name}</a><br />
          ${college.location} | 5/5
        `;
        row.appendChild(collegeCell);
        
        // Ranking column
        const rankingCell = document.createElement('td');
        rankingCell.textContent = `#${college.ranking} out of 200 in India 2024`;
        row.appendChild(rankingCell);
        
        // Cutoff column
        const cutoffCell = document.createElement('td');
        cutoffCell.textContent = `JEE-Advanced 2024 Cut off ${college.cutoff}`;
        row.appendChild(cutoffCell);
        
        // Deadline column
        const deadlineCell = document.createElement('td');
        deadlineCell.textContent = new Date(college.deadline).toLocaleDateString();
        row.appendChild(deadlineCell);
        
        // Fees column
        const feesCell = document.createElement('td');
        feesCell.innerHTML = `₹${college.fees}<br />1st Year Fees`;
        row.appendChild(feesCell);
        
        // Append the row to the table body
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });