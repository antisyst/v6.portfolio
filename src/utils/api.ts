
export async function fetchInitialData() {
    const response = await fetch('http://localhost:3000/');
    
    if (!response.ok) {
      throw new Error('Failed to fetch initial data');
    }
  
    const data = await response.json();
    return data;
  }
  