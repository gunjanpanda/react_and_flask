# Use the official CentOS image
FROM fedora:latest

# Install Python3, pip3, Node.js, and npm
RUN dnf install -y python3 python3-pip nodejs npm

# Set the working directory
WORKDIR /react-flask

# Copy and install backend dependencies
COPY flask-server/requirements.txt /react-flask/flask-server/
RUN pip3 install -r /react-flask/flask-server/requirements.txt

# Copy and install frontend dependencies
COPY client/package.json /react-flask/client/
COPY client/package-lock.json /react-flask/client/
RUN cd /react-flask/client && npm install

# Copy the entire project to the container
COPY . /react-flask/

# Expose ports for Flask and React
EXPOSE 5000 3000

# Run both Flask and React
CMD ["sh", "/react-flask/start.sh"]
