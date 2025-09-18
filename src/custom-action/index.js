const core = require('@actions/core');

/**
 * Color codes for console output
 */
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
};

/**
 * Main function for the custom action
 */
async function run() {
  try {
    // Get inputs
    const greeting = core.getInput('greeting') || 'Hello';
    const name = core.getInput('name');
    const color = core.getInput('color') || 'green';
    
    // Validate inputs
    if (!name) {
      throw new Error('Input "name" is required');
    }
    
    // Generate the message
    const message = `${greeting}, ${name}!`;
    const timestamp = new Date().toISOString();
    
    // Get color code
    const colorCode = colors[color.toLowerCase()] || colors.green;
    const resetCode = colors.reset;
    
    // Output the greeting with color
    console.log(`${colorCode}🎉 ${message}${resetCode}`);
    console.log(`⏰ Generated at: ${timestamp}`);
    
    // Set outputs
    core.setOutput('message', message);
    core.setOutput('timestamp', timestamp);
    
    // Log additional information
    core.info(`Custom action executed successfully!`);
    core.info(`Greeting: "${greeting}"`);
    core.info(`Name: "${name}"`);
    core.info(`Color: "${color}"`);
    
    // Create a summary
    await core.summary
      .addHeading('Custom Action Results')
      .addRaw(`<p><strong>Message:</strong> ${message}</p>`)
      .addRaw(`<p><strong>Timestamp:</strong> ${timestamp}</p>`)
      .addRaw(`<p><strong>Color:</strong> ${color}</p>`)
      .write();
    
    console.log('✅ Custom action completed successfully!');
    
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

// Run the action
run();