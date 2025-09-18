#!/usr/bin/env node
/**
 * Simple Node.js application for GitHub Actions CI/CD demonstration.
 * This script demonstrates basic JavaScript functionality for testing in workflows.
 */

const os = require('os');
const fs = require('fs');
const path = require('path');

/**
 * Generate a greeting message
 * @param {string} name - Name to greet
 * @returns {string} Greeting message
 */
function greet(name = 'World') {
    return `Hello, ${name}!`;
}

/**
 * Get system information
 * @returns {object} System information object
 */
function getSystemInfo() {
    return {
        nodeVersion: process.version,
        platform: process.platform,
        architecture: process.arch,
        hostname: os.hostname(),
        timestamp: new Date().toISOString()
    };
}

/**
 * Simple function to test
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Main function
 */
function main() {
    console.log('🟨 GitHub Actions Lab - JavaScript Example');
    console.log('='.repeat(40));
    
    // Basic greeting
    console.log(greet('GitHub Actions'));
    
    // System information
    const info = getSystemInfo();
    console.log(`\nNode.js Version: ${info.nodeVersion}`);
    console.log(`Platform: ${info.platform}`);
    console.log(`Architecture: ${info.architecture}`);
    console.log(`Hostname: ${info.hostname}`);
    console.log(`Timestamp: ${info.timestamp}`);
    
    // Simple test
    const result = add(2, 2);
    console.assert(result === 4, 'Basic math failed!');
    console.log(`\n✅ Test passed: 2 + 2 = ${result}`);
    
    // Create a simple output file for artifacts
    const buildDir = 'build';
    if (!fs.existsSync(buildDir)) {
        try {
            fs.mkdirSync(buildDir, { recursive: true });
        } catch (err) {
            // Directory might already exist or we don't have permissions
            console.log('Note: Could not create build directory');
        }
    }
    
    try {
        const outputFile = path.join(buildDir, 'app-output.json');
        fs.writeFileSync(outputFile, JSON.stringify(info, null, 2));
        console.log(`\n📄 Output written to: ${outputFile}`);
    } catch (err) {
        console.log('Note: Could not write output file');
    }
    
    console.log('\n🎉 JavaScript application executed successfully!');
    return 0;
}

// Run main function if this script is executed directly
if (require.main === module) {
    const exitCode = main();
    process.exit(exitCode);
}

// Export functions for testing
module.exports = { greet, getSystemInfo, add };