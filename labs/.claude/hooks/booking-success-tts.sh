#!/usr/bin/env bash
# PostToolUse hook: speak a celebratory message when a booking succeeds.
# Reads stdin, looks for a success signal, then plays a sound + TTS.

input=$(cat)

# Only celebrate when the tool result mentions a successful booking submission.
if echo "$input" | grep -qiE 'booking (successful|confirmed)|thank you|success|"success":\s*true'; then
  # macOS: play system sound + speak. Falls back silently on other OSes.
  if command -v afplay >/dev/null 2>&1; then
    afplay /System/Library/Sounds/Glass.aiff &
  fi
  if command -v say >/dev/null 2>&1; then
    say -v Samantha "Hurray, your form is submitted" &
  elif command -v espeak >/dev/null 2>&1; then
    espeak "Hurray, your form is submitted" &
  fi
fi

# Always pass the original output through untouched.
printf '%s' "$input"
