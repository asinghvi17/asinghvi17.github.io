const pagedir = joinpath(@__DIR__, "pages")
const templatedir = joinpath(@__DIR__, "templates")

function writefile(io, filename)
    open(filename) do buf
        write(io, buf)
    end
end

writepage(io, page) = writefile(io, joinpath(pagedir, page))
writetemplate(io, template) = writefile(io, joinpath(templatedir, template))

function makepage(page)
    open(joinpath(@__DIR__, page), "w") do io
        print(io, "<!DOCTYPE html>\n<html lang='en' dir='ltr'>\n")
        writetemplate(io, "head.html")
        println(io, "<body>")
        writetemplate(io, "navbar.html")
        writepage(io, page)
        writetemplate(io, "footer.html")
        println(io, "</body>")
        println(io, "</html>")
    end
end

foreach(makepage, readdir(pagedir))
