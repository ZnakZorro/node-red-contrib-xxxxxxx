# node-red-contrib-xxxxxxx
<h3>Node app for buldind another node-red modules</h3>
<pre>
<a href="https://raw.githubusercontent.com/ZnakZorro/node-red-contrib-xxxxxxx/master/proto-red.js">https://raw.githubusercontent.com/ZnakZorro/node-red-contrib-xxxxxxx/master/proto-red.js</a>
</pre>
<code>
wget https://raw.githubusercontent.com/ZnakZorro/node-red-contrib-xxxxxxx/master/proto-red.js
</code>
<code>
node proto-red.js mynewmodule
</code>
<code>
sudo cp proto-red.js /bin/red-prototype.js
<br />
sudo chmod +x /bin/red-prototype.js
<br />
red-prototype.js
</code>

<hr />

<h2>Node-red for start building own module</h2>

<pre>
cd ~/.node-red

mkdir red

cd red
</pre>

<pre>

sudo git clone https://github.com/ZnakZorro/node-red-contrib-xxxxxxx.git

cd node-red-contrib-xxxxxxx

sudo chown pi:pi *

sudo npm link

cd ~/.node-red

sudo npm link node-red-contrib-xxxxxxx


</pre>
