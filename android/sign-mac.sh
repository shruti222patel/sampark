#!/bin/bash

jarsigner -verbose -keystore staging-release-key.keystore "$1" staging

echo ""
echo ""
echo "Checking if APK is verified..."
jarsigner -verify "$1"

