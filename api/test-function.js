exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ 
      message: 'Test function working!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production'
    })
  };
}; 