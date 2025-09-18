#!/usr/bin/env python3
"""
Simple Python script for GitHub Actions CI/CD demonstration.
This script demonstrates basic Python functionality for testing in workflows.
"""

import sys
import json
from datetime import datetime


def greet(name="World"):
    """Return a greeting message."""
    return f"Hello, {name}!"


def get_system_info():
    """Get basic system information."""
    return {
        "python_version": sys.version,
        "platform": sys.platform,
        "timestamp": datetime.now().isoformat()
    }


def main():
    """Main function to demonstrate the script functionality."""
    print("🐍 GitHub Actions Lab - Python Example")
    print("=" * 40)
    
    # Basic greeting
    print(greet("GitHub Actions"))
    
    # System information
    info = get_system_info()
    print(f"\nPython Version: {info['python_version'].split()[0]}")
    print(f"Platform: {info['platform']}")
    print(f"Timestamp: {info['timestamp']}")
    
    # Simple calculation to demonstrate testing
    result = 2 + 2
    assert result == 4, "Basic math failed!"
    print(f"\n✅ Test passed: 2 + 2 = {result}")
    
    print("\n🎉 Python script executed successfully!")
    return 0


if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)