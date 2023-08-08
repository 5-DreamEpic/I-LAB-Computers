install xampp
add virtual hosts
	add this line to httpd-vhosts.conf

	Change to your XAMPP installation directory (typically, C:\xampp) and open the httpd-vhosts.conf file in the apache\conf\extra\ subdirectory using your favourite text editor.

	Replace the contents of this file with the following directives:
		<VirtualHost *:80>
       			DocumentRoot "C:/xampp/htdocs/"
       			ServerName localhost
		</VirtualHost>
		<VirtualHost *:80>
       			DocumentRoot "C:\Users\sunet\OneDrive\Desktop\Online-Store"
       			ServerName ilab.localhost
       			<Directory C:\Users\sunet\OneDrive\Desktop\Online-Store>  
        			AllowOverride none
        			Require all granted  
    			</Directory>
		</VirtualHost>

