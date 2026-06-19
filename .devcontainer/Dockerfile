FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Install useful baseline tools
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        curl \
        ca-certificates \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Official package: @anthropic-ai/claude-code
RUN npm install -g @anthropic-ai/claude-code

# Optional but useful for checking Astro/Node compatibility
RUN node --version \
    && npm --version \
    && claude --version || true

WORKDIR /workspaces/www