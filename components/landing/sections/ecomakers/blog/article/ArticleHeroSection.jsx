import { Calendar, Clock } from "lucide-react"

export default function ArticleHeroSection({ 
  category, 
  title, 
  excerpt, 
  date, 
  datetime, 
  readTime
}) {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 border-b">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {category}
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl">
            {excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4 border-t">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">Trajectoires GTB</span>
              <span className="mx-2">·</span>
              <span>par EcoMakers</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={datetime}>{date}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
