# Get the root directory
root = File.dirname(__FILE__)

# environment: Environment
environment = :development

# $ext_path: This should be the path of the Ext JS SDK relative to this file
$ext_path = "../../../vendors/ext-4.0.7-gpl"

# sass_path: the directory your Sass files are in. THIS file should also be in the Sass folder
# Generally this will be in a resources/sass folder
# <root>/resources/sass
sass_path = root

# css_path: the directory you want your CSS files to be.
# Generally this is a folder in the parent directory of your Sass files
# <root>/resources/css
css_path = File.join(sass_path, "..", "..", "css")

# output_style: The output style for your compiled CSS
# nested, expanded, compact, compressed
# More information can be found here http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#output_style
output_style = (environment == :production) ? :compressed : :expanded

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# We need to load in the Ext4 themes folder, which includes all it's default styling, images, variables and mixins
load File.join(root, $ext_path, 'resources', 'themes')
